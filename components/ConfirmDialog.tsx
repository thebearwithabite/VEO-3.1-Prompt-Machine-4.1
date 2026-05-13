/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { AlertTriangleIcon } from './icons';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDestructive = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100"
      >
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-full ${isDestructive ? 'bg-red-900/30' : 'bg-yellow-900/30'}`}>
                <AlertTriangleIcon className={`w-6 h-6 ${isDestructive ? 'text-red-500' : 'text-yellow-500'}`} />
            </div>
            <h3 id="dialog-title" className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p id="dialog-description" className="text-gray-300 mb-8 whitespace-pre-line leading-relaxed pl-1">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-white rounded-lg font-medium transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 ${isDestructive ? 'bg-red-600 hover:bg-red-700 shadow-red-500/20 focus-visible:ring-red-400' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20 focus-visible:ring-indigo-400'}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;