<script setup>
import { ref } from 'vue'

const sending = ref(false)
const status = ref('')

const submitForm = async (event) => {
  sending.value = true
  status.value = ''
  const form = event.target
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Request failed')
    status.value = 'Thanks — your message has been sent.'
    form.reset()
  } catch (err) {
    status.value = 'Something went wrong. Please try again.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section class="contact" id="contact">
    <div class="contact-inner">
      <h2>Let's talk</h2>
      <p>Tell us a bit about what you need, and we'll get back to you within a day.</p>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" class="btn-primary" :disabled="sending">
          {{ sending ? 'Sending…' : 'Send Message' }}
        </button>
        <p v-if="status" class="form-status">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 100px 24px;
  background: var(--bg-alt);
}

.contact-inner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.contact h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 12px;
}

.contact-inner > p {
  color: var(--text-muted);
  margin-bottom: 40px;
}

form {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px;
  text-align: left;
  display: grid;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
}

input, textarea {
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
}

textarea {
  resize: vertical;
  min-height: 110px;
}

form .btn-primary {
  width: 100%;
  margin-top: 6px;
}

.form-status {
  text-align: center;
  font-size: 0.9rem;
  color: var(--primary-dark);
  margin-top: 4px;
}

@media (max-width: 760px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
