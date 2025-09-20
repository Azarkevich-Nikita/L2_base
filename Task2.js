//https://www.codewars.com/kata/556d120c7c58dacb9100008b

function ipv4Parser(ip, mask){
  const ipArr = ip.split('.').map(x => parseInt(x, 10));
  const maskArr = mask.split('.').map(x => parseInt(x, 10));
  
  const network = [];
  const host = [];
  
  for(let i = 0; i < 4; ++i){
    const net = ipArr[i] & maskArr[i];
    
    network.push(net);
    host.push(ipArr[i] - net);
  }
  
  return [network.join('.'), host.join('.')]
}