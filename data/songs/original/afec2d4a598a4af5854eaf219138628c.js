A = 440,

s = (n,x=-t>>8&255) => (t/375*A*(2**(1/12))**n&x)/256,
c1 = -[2,4,2,9][t>>17&3],
c2 = [5,0,5,0][t>>17&3],
c3 = [8,7,8,5][t>>17&3],
cho = (s(c1)+s(c2)+s(c3))/2*(1-t%16384/16384),
bas = s(c1-36,127)*(1-t%16384/2e4)*1.5,
cho+bas-1