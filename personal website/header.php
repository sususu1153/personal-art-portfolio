<!-- header.php -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suzie Lou's World</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> 
  <link rel="stylesheet" href="suzie_website_home.css">
</head>

<body>
  <header>
    <h1 class="logo">SL</h1>
    <div class="middle-header"></div>
    <div class="right-header">
      <a href="suzie_website_home.html" class="header-button">Home</a>
      <a href="suzie_website_gallery.html" class="header-button">Gallery</a>
      <button class="header-button">Growth</button>
      <a href="suzie_website_about.html" class="header-button">About</a>
    </div>
  </header>


  <script>
    // Add event listener for scroll
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY; // Get current scroll position

      const shakeAmount = scrollY * 0.05 // Create a small sinusoidal movement

      document.body.style.backgroundPosition = `center ${shakeAmount}px`;
    });
  </script>


</body>
</html>
