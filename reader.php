<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
	if (!$fileinfo->isDot()) {
		print_r($fileinfo->getFilename());
	}
}
?>