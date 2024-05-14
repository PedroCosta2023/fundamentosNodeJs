
// Streams -->

// process.stdin
//  .pipe(process.stdout)

import { on } from 'node:events'
import { read } from 'node:fs'
import { stdout } from 'node:process'
import {Readable} from 'node:stream'

class oneToHundredStream extends Readable{
    index = 1

    _read () {
        const i = this.index++

        setTimeout(() =>{
            if(i > 100) {
                this.push(null)
            } else{
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        },500)

    }
}

    new oneToHundredStream()
    .pipe(process.stdout)