<h1>
    Dietary Info
</h1>

<script>
    function goLoginPage(){
        window.location.href = '/login';
    }
    function goGuest(){
        alert("Continuing as Guest....");
    }
</script>

<div class="buttons">
    <button class="loginButton"
        on:click={goLoginPage}>
    </button>
    <button class="guestButton"
        on:click={goGuest}>
    </button>
</div>

<style>
    :global(body){
        background-color: lightblue;
        margin: 0;
        font-family: sans-serif;
       /* cursor: url('/images/apple.jpg'), auto; */
    }
    h1{
        text-align: center;
        font-size: 6rem;
        margin-top: 7rem;
    }
    .buttons{
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 0rem;
    }
    .loginButton{
        width: 10rem;
        height: 10rem;
        background-image: url('/images/login.jpg');
        background-size: cover;       /*cover whole button*/
        background-position: center;  /*center image*/
        border-radius: 8px;           /*rounded corners*/
        cursor: url('/images/login2.jpg'), auto;
    }
    .loginButton:hover{
        background-image: url('/images/login2.jpg');
    }
    .guestButton{
        width: 10rem;
        height: 10rem;
        background-image: url('/images/guest.jpg');
        background-size: cover;       /*cover whole button*/
        background-position: center;  /*center image*/
        border-radius: 8px;           /*rounded corners*/
    }
    .guestButton:hover{
        background-image: url('/images/guest2.jpg');
    }
    button{
        width: 10rem;
        height: 10rem;
        cursor: pointer;    /*cursor change on buttons*/
    }
    button:hover{
        background-color: #27a478;
    }
</style>