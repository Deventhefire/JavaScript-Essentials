// Palindrom

s= "anna madam drives a racecar "
s1=""
s2=""
for(t of s){
  if(t!= " "){
    s1= s1 +  t 
    s2= t + s2
  }
  else{
    if(s1==s2)console.log(s2)
    s1=""
    s2=""
  } 
}