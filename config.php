<?php
  // connect to mongodb
  $m = new MongoClient();
  echo "Connection to database successfully";
  // select a database
  $db = $m->spotnik;
  echo "Database spotnik selected";
?>