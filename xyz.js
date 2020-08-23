var array = ["HTML"]
var output = ""
if (array.length>1) 
{
  for(var i=0;i < array.length-1;i++)
  {
    output = output + array[i] + ","
  }
  if(i=array.length-1){
  output = output+array[i]
  }
  console.log(output)
}
else
{
  output = output + array[0]
  console.log(output)
}