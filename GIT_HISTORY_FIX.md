# How to Fix GitHub History (Purging Large Files or Secrets)

If you've accidentally committed large files (like videos or large datasets) or sensitive secrets (API keys) and want to remove them from your entire Git history, follow these steps.

## ⚠️ WARNING
These operations **rewrite history**. This will break the history for anyone else who has cloned the repository. Coordinate with your team before doing this. **Backup your repository first.**

---

## Method 1: Using `git filter-repo` (Recommended)

`git-filter-repo` is the modern, faster, and safer replacement for `git filter-branch` and BFG Repo-Cleaner.

### 1. Install `git-filter-repo`
If you have Python installed, you can install it via pip:
```bash
pip install git-filter-repo
```
Or on macOS via Homebrew:
```bash
brew install git-filter-repo
```

### 2. Fresh Clone
It is highly recommended to work on a fresh, bare clone to avoid local configuration issues.
```bash
git clone --mirror https://github.com/your-username/your-repo.git
cd your-repo.git
```

### 3. Remove a Specific File or Folder
To remove a file named `large_video.mp4` from every commit:
```bash
git filter-repo --path path/to/large_video.mp4 --invert-paths
```
To remove an entire folder:
```bash
git filter-repo --path path/to/large_folder/ --invert-paths
```

### 4. Remove Secrets (Text Replacement)
If you committed an API key and want to replace it with `***REMOVED***` everywhere:
```bash
git filter-repo --replace-text <(echo "YOUR_SECRET_KEY==>***REMOVED***")
```

### 5. Force Push
After the history is rewritten, you must force push to update GitHub.
```bash
git push origin --force --all
git push origin --force --tags
```

---

## Method 2: Using BFG Repo-Cleaner (Simpler for Files)

If you just want to delete large files by size or name and don't want to install Python tools.

### 1. Download BFG
Download the `.jar` from [rtyley.github.io/bfg-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

### 2. Run BFG
To remove all files larger than 50MB:
```bash
java -jar bfg.jar --strip-blobs-bigger-than 50M your-repo.git
```
To remove a specific file by name:
```bash
java -jar bfg.jar --delete-files large_video.mp4 your-repo.git
```

### 3. Clean up and Push
```bash
cd your-repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push origin --force
```

---

## Post-Fix Steps

1. **Inform your team:** They will need to delete their local copies and re-clone.
2. **Rotate Secrets:** If you removed an API key, **it is still compromised.** You MUST generate a new key in the service provider's dashboard (e.g., Google Cloud Console, Firebase).
3. **Update `.gitignore`:** Ensure the files you removed are now listed in your `.gitignore` so they don't get committed again.
