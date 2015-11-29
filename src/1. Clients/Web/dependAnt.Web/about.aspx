<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="about.aspx.cs" Inherits="dependAnt.Web.AboutPage" %>

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>Send the Ants!</title>

    <!-- Stylish things -->
    <link rel="icon" type="image/ico" href="fav-icon.ico" />
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic|Source+Code+Pro" />
    <link rel="stylesheet" href="Styles/normalize.css" type="text/css" />
    <link rel="stylesheet" href="Styles/app.css" type="text/css" />

    <!-- Scripty things -->
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="//ajax.aspnetcdn.com/ajax/signalr/jquery.signalr-2.2.0.min.js"></script>
    <script src="//code.jquery.com/color/jquery.color-2.1.2.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.0/rx.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.0/rx.binding.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.0/rx.time.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js"></script>
    <script src="generated.js"></script>

</head>
<body>
    <header class="hero" role="banner">
      <nav class="global-nav" role="navigation">        
        <section class="wrap-container">
          <!-- Top/Left Logo and Signature -->
          <div class="global-nav-item logo-text">
            <a class="global-nav-app-signature" href="/">
               <img src="/images/dependAnt.png" class="icon" /> 
               <span class="signature1">dependAnt.</span> 
               <span class="signature2">See?</span>
            </a>
          </div>

          <!-- Top/Right Buttons -->
          <ul class="global-nav-list">
            <li class="global-nav-item">
              <a href="/">Contribute</a>
            </li>
            <li class="global-nav-item">
              <a class="cta-link-nav" href="/">Docs</a>
            </li>
          </ul>
        </section>
      </nav>

      <section class="body-content-container wrap-container" data-waypoint="hero-content">
        <a class="hero-content-logo" href="/"><img src="/images/dependAnt-icon.png" /></a>
        <h2 class="hero-headline"><em>Send the Ants!</em></h2>
        <h3 class="hero-description">            
            1. Claim some <strong>dependAnts</strong> so you can have some workers. <br />
            2. Use them to march thru your dependencies. <br /> 
            3. Wait for them to <em>report back</em> with the state of affairs.
        </h3>

        <div class="hero-banner-container">
          <div>
            <article class="centered-content">
                Whether you have one Ant or an army of Ants, you can depend on them to keep an eye on the farm.
            </article>
          </div>
        </div>
      </section>
    </header>

    <div class="body-content-container wrap-container" role="main">
        <article class="centered-content">
            <a class="community-cta" href="/colony/">Contribute to the open-source colony</a>
        </article>
    </div>
</body>
</html>
