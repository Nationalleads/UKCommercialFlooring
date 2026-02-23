
import { useState } from 'react';

export const useWebhookSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitToWebhook = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('https://n8n.srv1411163.hstgr.cloud/webhook/c98a6dea-6c73-44a0-9f66-01d2c3b56ac9', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'Website Quote Form'
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }

      setSuccess(true);
      return { success: true };
    } catch (err) {
      console.error('Webhook submission error:', err);
      setError(err.message || 'Failed to submit to webhook');
      // Return false but don't throw to allow graceful fallback (e.g., Supabase still works)
      return { success: false, error: err.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitToWebhook, isSubmitting, error, success };
};
