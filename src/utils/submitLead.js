const GOOGLE_SCRIPT_URL =
  // 'https://script.google.com/macros/s/AKfycbxV3cQxYD1mIbjy7NE5_qDmtTX5eLajpc6Z8pWCKUr9yLzj6mhtX5eAHCfWmxhCuxdA1g/exec'
  'https://script.google.com/macros/s/AKfycbz2UIESoamR47iHIuH1WKQdGvNHyrF4veN5i6BKwjkjLcyg0eaWyp3muofOQnV8zE7P4A/exec'
export async function submitLead({ destination, name, email, phone }) {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error('Google Apps Script Web App URL is not configured yet.')
  }

  const formData = new URLSearchParams()

  formData.append('destination', destination || '')
  formData.append('name', name || '')
  formData.append('email', email || '')
  formData.append('phone', phone || '')

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  })
}