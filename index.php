<?php

//Let's set this up to go to the guide list, and return a list of projects. 

$file = 'http://makeprojects.com/api/0.1/guides/?limit=200&offset=1400';
$contents = file_get_contents($file);
$projects = json_decode($contents);

//Print helper to see where we are...

//print_r($projects);

//Find the ids of projects, loop through them, getting all of the required data, and then spitting each into a file. In the future, a DB might be the more stable version to build this...

foreach ($projects as $project) {
	$project_url = 'http://makeprojects.com/api/0.1/guide/'.$project->guideid;
	$proj_contents = file_get_contents($project_url);
	$file = $project->guideid.'.json';
	$fh = fopen($file, 'w') or die("Shucks, I can't open the file");
	fwrite($fh, $proj_contents);
	fclose($fh);
}
?>