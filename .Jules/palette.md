## 2026-04-15 - Added aria-labels to icon-only buttons
**Learning:** The UI extensively uses lucide-react icons within buttons without accessible text labels, presenting a systematic accessibility gap.
**Action:** Ensure all icon-only interactive elements receive descriptive `aria-label` attributes to support screen readers and keyboard navigation users.

## 2026-04-16 - Added loading state to async submit button
**Learning:** Users need immediate visual feedback when initiating long-running tasks. Disabling the button is good, but adding a spinner and updating the text confirms the action was received and the application is actively processing.
**Action:** Always include a loading spinner or active state text on primary action buttons that trigger async operations.
## 2024-04-21 - Added missing ARIA labels to icon-only interactive elements
**Learning:** Discovered icon-only buttons in the VideoResult component lacking `aria-label` and `title` attributes, which creates an inaccessible experience for screen reader users and those seeking tooltip context.
**Action:** Implemented `aria-label` and `title` properties on "Set active keyframe", "Apply Reference Guidance", and "Download image" buttons to improve screen reader accessibility and discoverability.

## 2026-04-23 - [Add ARIA properties to image toggle buttons]
**Learning:** Image-only buttons used for toggling states (like selecting guidance frames) are completely opaque to screen readers without proper aria-labels and aria-pressed attributes. Relying on visual borders to indicate selection state is a severe accessibility anti-pattern.
**Action:** Always add `aria-label` (using the image's name/context), `aria-pressed` (reflecting the boolean selected state), and `alt` text to the inner image for interactive image galleries/pickers.

## 2026-04-25 - Replaced hidden file inputs with sr-only for keyboard accessibility
**Learning:** Using `className="hidden"` on file inputs removes them from the tab order, breaking keyboard accessibility. Wrapping them in a `<label>` does not make them focusable.
**Action:** Use Tailwind's `sr-only` class on file inputs to hide them visually while keeping them keyboard-focusable, and apply `focus-within` styling to the parent label.
