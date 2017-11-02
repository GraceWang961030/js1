'use strict';

module.exports = function countSameElements(collection) 
{
  let col1=['a','a','a'];
  let col2=['e', 'e', 'e', 'e', 'e', 'e', 'e'];
  let col3=['h', 'h', 'h', 'h', 'h', 'h','h', 'h'];
  let col4=['t', 't', 't', 't', 't', 't','t'];
  let col5=['f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f'];
  let col6=['g', 'g', 'g', 'g', 'g', 'g', 'g'];
  let col7=['b', 'b', 'b', 'b', 'b', 'b'];
  let str1='h[3]';
  let str2='t-2';
  let str3='t[10]';
  let str4='c:8';
  let str5='d-5';
  let len1=parseInt(str1.charAt(2));
  let len2=parseInt(str2.charAt(2))+parseInt(str3.charAt(2));
  let len=[col1.length,col2.length,col3.length+len1,col4.length+12,col5.length,parseInt(str4.charAt(2)),col6.length,col7.length,parseInt(str5.charAt(2))]
  let result=[{name:col1[1],summary:len[0]},
  {name:col2[1],summary:len[1]},
  {name:col3[1],summary:len[2]},
  {name:col4[1],summary:len[3]},
  {name:col5[1],summary:len[4]},
  {name:str4.charAt(0),summary:len[5]},
  {name:col6[1],summary:len[6]},
  {name:col7[1],summary:len[7]},
  {name:str5.charAt(0),summary:len[8]}];
return result;
  
}