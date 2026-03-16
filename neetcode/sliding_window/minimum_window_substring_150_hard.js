class Solution {
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const countT = {};
        const window = {};

        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        const need = Object.keys(countT).length;

        let res = [-1, -1];
        let resLen = Infinity;

        let l = 0;

        for (let r = 0, n = s.length; r < n; r++) {
            const c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (c in countT && window[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                const windowLen = r - l + 1;

                if (windowLen < resLen) {
                    res = [l, r];
                    resLen = windowLen;
                }

                const leftChar = s[l];
                window[leftChar]--;

                if (leftChar in countT && window[leftChar] < countT[leftChar]) {
                    have--;
                }

                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}


console.log(
    new Solution().minWindow("abbbbbbbc", "abc")
);