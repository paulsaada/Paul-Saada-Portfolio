<?php

if (isset($_POST['submit'])) {
	$firstName = $_POST['fname'];
	$lastName = $_POST['lname'];
	$mailFrom = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$mailTo = 'hello@paulsaada.com';
	$headers = "From: ".$mailFrom;
	$txt = "You have received an email from ".$firstName." ".$lastName.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.html?mailsend");
}
?>