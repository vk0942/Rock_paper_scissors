#include <bits/stdc++.h>
using namespace std;
int main()
{
    vector<int> v = {8,7,4,2,0};
    int t; cin>>t;
    int ind = upper_bound(v.begin(),v.end() , t ,greater<int>()) - v.begin();
    cout<<ind<<endl;
}

