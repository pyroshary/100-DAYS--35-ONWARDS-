function trip(country: string = "pakistan", city: string = "karachi") {
  console.log(
    ` we are traveling to ${country} and the city where we going is ${city}`
  );
}
trip();
trip("USA", "NEW YORK");
trip("islamabad");