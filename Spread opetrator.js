// Using the Spread operator which is  ...
// The spread operator is used to remove elements from and another list by spreading(dis-array) and putting 
// them into another array
{
    const food = ["Rice", "Yam", "beans", "Maize", "pea"];
    const clothes = ["baggy", "Tshirt", "trouser", "jeans", "sleeves"];
  
    const newarray = [...food, ...clothes];
    console.log(newarray);
  }
  