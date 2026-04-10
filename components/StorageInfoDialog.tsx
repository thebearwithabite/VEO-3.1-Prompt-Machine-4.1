/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { InfoIcon, XMarkIcon, SaveIcon, FileArchiveIcon } from './icons';

interface StorageInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const StorageInfoDialog: React.FC<StorageInfoDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-2xl w-full p-0 overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-gray-900/50">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-indigo-400" />
                Storage & Sharing Guide
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="p-6 overflow-y-auto space-y-6 text-gray-300 leading-relaxed">
            <section>
                <h4 className="text-white font-semibold mb-2 text-lg">Where are my images?</h4>
                <p>
                    All generated keyframes, uploaded assets, and guidance frames are stored in <strong>Firebase Cloud Storage</strong>. 
                    They are automatically synced to your account when you are signed in with Google.
                </p>
                <div className="mt-3 bg-indigo-900/30 border border-indigo-700/50 p-3 rounded-lg text-sm text-indigo-200 flex gap-2 items-start">
                     <span className="text-xl">☁️</span>
                     <div>
                        <p className="font-bold mb-1">Cloud Persistence</p>
                        <p>Your project state is saved to Firestore and images are stored in a secure bucket. 
                        This means you can refresh the page or switch devices and your work will be waiting for you. 
                        <strong>Make sure you are signed in</strong> to enable auto-sync.</p>
                     </div>
                </div>
            </section>

            <section>
                <h4 className="text-white font-semibold mb-2 text-lg">How do I share my project with images?</h4>
                <p className="mb-4">You have two options to save and share your work permanently:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-700/30 p-4 rounded-xl border border-gray-600">
                        <div className="flex items-center gap-2 text-white font-bold mb-2">
                            <SaveIcon className="w-5 h-5 text-green-400" />
                            1. Save Project (.json)
                        </div>
                        <p className="text-sm">
                            Downloads a single <code>.json</code> file containing your entire project state, <strong>including all images</strong>. 
                            You can send this file to anyone. They can load it using the "Load Project" button on the start screen to see everything exactly as you left it.
                        </p>
                    </div>

                    <div className="bg-gray-700/30 p-4 rounded-xl border border-gray-600">
                         <div className="flex items-center gap-2 text-white font-bold mb-2">
                            <FileArchiveIcon className="w-5 h-5 text-indigo-400" />
                            2. Export Package (.zip)
                        </div>
                        <p className="text-sm">
                            Creates a professional zip package. This is best for file organizers or handing off to production. 
                            It saves images as actual <code>.png</code> files in folders.
                        </p>
                    </div>
                </div>
            </section>
        </div>

        <div className="p-6 border-t border-gray-700 bg-gray-900/50 flex justify-end">
            <button
                onClick={onClose}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
                Got it
            </button>
        </div>
      </div>
    </div>
  );
};

export default StorageInfoDialog;