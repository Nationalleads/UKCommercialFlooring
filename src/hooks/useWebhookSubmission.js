import { useState } from 'react';

export const useWebhookSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitToWebhook = async (formData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://n8n.srv1411163.hstgr.cloud/webhook/lead-generation',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Webhook response:', result);
      return result;
    } catch (err) {
      console.error('Webhook submission failed:', err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitToWebhook, isSubmitting };
};