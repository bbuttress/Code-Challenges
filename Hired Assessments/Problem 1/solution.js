
const solution = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    
    let sMap = {};
    let isIsomorphic = true;
    
    for(let i = 0; i < s.length; i++) {
        if (sMap[s[i]] && sMap[s[i]] !== t[i]) {
            isIsomorphic = false;
            break;
        }
        
        sMap[s[i]] = t[i];
    }
    
    return isIsomorphic;
};

