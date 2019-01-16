function rot13(str) {
  shift = ''
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65)  //if A-Z in numbers or has the characters ?!space

      if (str.charCodeAt(i) >= 78)
        shift += String.fromCharCode(str.charCodeAt(i) - 13)
      else
        shift += String.fromCharCode(str.charCodeAt(i) + 13)

      print (shift)
      return shift
    }

rot13("SERR PBQR PNZC");