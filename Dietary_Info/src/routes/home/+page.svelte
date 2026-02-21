<script>
  function goLoginPage() {
    window.location.href = '/login';
  }

  function goGuest() {
    alert("Continuing as Guest\nData will not be saved");
  }
</script>

<div class="page-wrapper">
  <h1> Dietary Info </h1>
  <p> Track your allegries and dietary restrictions </p>

  <div class="card">
    <div class="buttons">
      <button class="loginButton" on:click={goLoginPage}> </button>
      <button class="guestButton" on:click={goGuest}> </button>
    </div>
  </div>
</div>

<style>
  .page-wrapper {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    
    background: linear-gradient(160deg, #0d1b2a, #1b263b);
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  h1 {
    color: #e0e1dd;
    text-align: center;
    font-size: 6rem;
    margin-top: 0;
  }

  p {
    color: #778da9;
    margin: 0 0 2.5rem 0;
  }

  .card {
    background: #1b263b;
    border: 1px solid #415a77;
    border-radius: 20px;
    padding: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 0rem;
  }

  button {
    width: 10rem;
    height: 10rem;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    border: 2px solid #415a77;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  button:hover {
    transform: translateY(-4px);
    border-color: #778da9;
  }

  .loginButton {
    background-image: url('/images/login.jpg');
  }

  .loginButton:hover {
    background-image: url('/images/login2.jpg');
  }

  .guestButton {
    background-image: url('/images/guest.jpg');
  }

  .guestButton:hover {
    background-image: url('/images/guest2.jpg');
  }
</style>