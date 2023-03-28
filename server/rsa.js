class RSA {
    // Membuat fungsi untuk generate key pair
    generateKeys(keySize) {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        let p = 0,
            q = 0,
            n = 0,
            phi = 0,
            e = 0,
            d = 0;
    
        // Generate p and q
        while (p === q) {
            p = primes[Math.floor(Math.random() * primes.length)];
            q = primes[Math.floor(Math.random() * primes.length)];
        }
    
        // Calculate n and phi
        n = p * q;
        phi = (p - 1) * (q - 1);
    
        // Calculate e
        for (let i = 2; i < phi; i++) {
            if (this.gcd(i, phi) === 1) {
                e = i;
                break;
            }
        }
    
        // Calculate d
        d = this.modInverse(e, phi);
    
        return {
            publicKey: { e, n },
            privateKey: { d, n },
        };
    }
    
    // Membuat fungsi untuk mencari GCD (Greatest Common Divisor)
    gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return gcd(b, a % b);
        }
    }
    
    // Membuat fungsi untuk mencari Mod Inverse
    modInverse(a, m) {
        a = ((a % m) + m) % m;
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) {
                return x;
            }
        }
        return 1;
    }
    
    // Membuat fungsi untuk mengenkripsi pesan dengan RSA
    encryptRSA(message, publicKey) {
        let result = [];
        for (let i = 0; i < message.length; i++) {
            let charCode = message.charCodeAt(i);
            let encryptedCharCode = this.modPow(charCode, publicKey.e, publicKey.n);
            result.push(encryptedCharCode);
        }
        return result;
    }
    
    decryptRSA(encryptedMessage, privateKey) {
        let result = '';
        for (let i = 0; i < encryptedMessage.length; i++) {
            let encryptedCharCode = encryptedMessage[i];
            let decryptedCharCode = this.modPow(encryptedCharCode, privateKey.d, privateKey.n);
            result += String.fromCharCode(decryptedCharCode);
        }
        return result;
    }
    
    // Membuat fungsi untuk melakukan perhitungan modulo secara efisien
    modPow(base, exponent, modulus) {
        if (modulus === 1) {
            return 0;
        }
    
        let result = 1;
        base = base % modulus;
    
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
    
            exponent = Math.floor(exponent / 2);
            base = (base * base) % modulus;
        }
    
        return result;
    }

}


export const rsa = new RSA();