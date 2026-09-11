<template>
  <main class="Prelim-layout">
    <div class="content-side">
      <span class="prefix-badge">ESTABLISHED 1905</span>
      <h1 class="main-heading">
        Exemplary <span class="italic-gold">Christian</span><br />
        Education for Life.
      </h1>
      
      <p class="summary-paragraph">
        A leading Christian institution in the Philippines, Central Philippine University nurtures intellectual growth and spiritual development through a commitment to <span class="brand-highlight">Scientia et Fides</span> (Science and Faith).
      </p>

      <div class="button-wrapper">
        <button class="solid-purple-btn">Explore Academics</button>
        <button class="outline-purple-btn">Request Information</button>
      </div>

      <div class="metrics-container">
        <div class="stat-box">
          <h2>118+</h2>
          <p>Years of Excellence</p>
        </div>
        <div class="stat-box">
          <h2>20+</h2>
          <p>Academic Programs</p>
        </div>
        <div class="stat-box">
          <h2>5,000+</h2>
          <p>Active Students</p>
        </div>
        <div class="stat-box">
          <h2>20+</h2>
          <p>Partner Institutions</p>
        </div>
      </div>
    </div>

    <div class="visual-side">
      <div class="brand-gradient-card">
        <img src="../assets/CPU_LOGO.png" alt="CPU Seal Badge" class="card-badge-logo" />
        <h3 class="card-brand-title">Central Philippine University</h3>
        <p class="card-brand-subtext">SCIENTIA ET FIDES</p>
        
        <div class="card-quote-block">
          <p>"A Heritage of Excellence,</p>
          <p>A Future of Faith"</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.Prelim-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 1fr);
  gap: 4rem;
  min-height: calc(100vh - 96px);
  padding: 4rem 5rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.content-side {
  text-align: center;
}

.prefix-badge {
  color: var(--accent-gold);
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 1.4rem;
}
.prefix-badge::before {
  content: "—  ";
}

.main-heading {
  font-size: clamp(3rem, 4vw, 4.2rem);
  line-height: 1.05;
  color: var(--primary-purple);
  margin: 0 0 1.3rem 0;
  font-weight: 800;
  font-family: serif;
}

.italic-gold {
  color: var(--accent-gold);
  font-style: italic;
}

.summary-paragraph {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-dark);
  margin: 0 auto 2.2rem auto;
  max-width: 560px;
}

.brand-highlight {
  color: var(--secondary-purple);
  font-weight: 700;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.solid-purple-btn,
.outline-purple-btn {
  min-width: 170px;
}

.solid-purple-btn {
  background-color: var(--primary-purple);
  color: #ffffff;
  border: none;
  padding: 0.95rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.98rem;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(69, 32, 96, 0.18);
}

.outline-purple-btn {
  background-color: transparent;
  color: var(--primary-purple);
  border: 1.5px solid var(--primary-purple);
  padding: 0.95rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.98rem;
  cursor: pointer;
}

.metrics-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background-color: #ffffff;
  padding: 1.3rem;
  border-radius: 18px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1edf7;
  gap: 1rem;
}

.stat-box {
  text-align: center;
  padding: 1rem 0;
  border-right: 1px solid #f0ecf5;
}
.stat-box:last-child {
  border-right: none;
}

.stat-box h2 {
  font-size: 1.55rem;
  color: var(--primary-purple);
  margin: 0 0 0.35rem 0;
  font-weight: 800;
}

.stat-box p {
  font-size: 0.78rem;
  color: #6f6b7d;
  margin: 0;
  font-weight: 600;
}

.brand-gradient-card {
  background: linear-gradient(135deg, rgba(200, 161, 0, 0.12) 0%, rgba(254, 247, 234, 0.8) 45%, #ffffff 100%);
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  box-shadow: 0 35px 80px rgba(30, 15, 75, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(200, 161, 0, 0.12);
}

.card-badge-logo {
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;
  object-fit: contain;
}

.card-brand-title {
  color: var(--primary-purple);
  font-size: 1.85rem;
  margin: 0 0 0.4rem 0;
  font-weight: 800;
  max-width: 320px;
  line-height: 1.2;
  font-family: serif;
}

.card-brand-subtext {
  color: var(--accent-gold);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.card-quote-block p {
  margin: 0;
  font-style: italic;
  color: #555555;
  font-size: 1rem;
  line-height: 1.65;
}

@media (max-width: 1120px) {
  .Prelim-layout {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
  }

  .metrics-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 760px) {
  .button-wrapper {
    justify-content: center;
  }

  .metrics-container {
    grid-template-columns: 1fr;
  }
}
</style>
