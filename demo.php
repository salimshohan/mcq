<?php
// demo.php

$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $message = "Hello, $name 👋 Welcome to PHP demo.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .box {
            background: #fff;
            padding: 24px;
            border-radius: 10px;
            width: 100%;
            max-width: 360px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        h2 {
            margin-bottom: 16px;
            text-align: center;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 12px;
            border-radius: 6px;
            border: 1px solid #ccc;
        }
        button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 6px;
            background: #4f46e5;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
        .msg {
            margin-top: 15px;
            text-align: center;
            color: green;
            font-weight: 500;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>PHP Demo Page</h2>

    <form method="post">
        <input type="text" name="name" placeholder="Enter your name" required>
        <button type="submit">Submit</button>
    </form>

    <?php if ($message): ?>
        <div class="msg"><?php echo $message; ?></div>
    <?php endif; ?>
</div>

</body>
</html>