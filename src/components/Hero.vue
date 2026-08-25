<template>
  <section class="hero" id="home">
    <span class="eyebrow">Now booking new clients</span>
    <h1>Build something worth <span>looking forward to.</span></h1>
    <p>A clear, focused starting point for your next launch — swap in your own name, story, and details, and it's ready to ship.</p>
    <div class="hero-actions">
      <a href="#contact"><button class="btn-primary">Get Started</button></a>
      <a href="#about"><button class="btn-secondary">Learn More</button></a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 110px 24px 130px;
  text-align: center;
  background: linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%);
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-dark);
  background: var(--white);
  border: 1px solid var(--border);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  font-weight: 800;
  max-width: 780px;
  margin: 0 auto 20px;
}

.hero h1 span {
  color: var(--primary-dark);
}

.hero p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 36px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
