<template>
  <section class="about" id="about">
    <div class="about-grid">
      <div>
        <span class="about-label">About Us</span>
        <h2>Built on a simple idea, done properly.</h2>
        <p> Reuter Development thrives on keeping things simple between the customer and myself. By always delivering websites on time and keeping them maintained properly.</p>
        <p>Shawn is someone you can trust to take you to the finish line. Whether you want a blog to share your thoughts or a simple starter website to establish yourself Shawn will be there to deliver it with passion and poise</p>
        <div class="stats">
          <div>
            <div class="stat-num">1</div>
            <div class="stat-label">Projects delivered</div>
          </div>
          <div>
            <div class="stat-num">100%</div>
            <div class="stat-label">Client satisfaction</div>
          </div>
          <div>
            <div class="stat-num">Less than 1 year</div>
            <div class="stat-label">In business</div>
          </div>
        </div>
      </div>
      <div class="about-visual">
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 24px;
}

.about-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary-dark);
  margin-bottom: 12px;
  display: block;
}

.about h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 18px;
}

.about p {
  color: var(--text-muted);
  margin-bottom: 16px;
  font-size: 1.02rem;
}

.about-visual {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 16px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.about-visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, var(--primary) 55%, var(--primary) 58%, transparent 58%);
  opacity: 0.5;
}

.about-visual-inner {
  font-family: 'Sora', sans-serif;
  font-weight: 700;
  color: var(--primary-dark);
  font-size: 3rem;
  z-index: 1;
}

.stats {
  display: flex;
  gap: 40px;
  margin-top: 28px;
}

.stat-num {
  font-family: 'Sora', sans-serif;
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--primary-dark);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-visual { order: -1; }
}
</style>
