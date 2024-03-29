<!-- This the JavaScript Code -->


                const synth = new Tone.MembraneSynth().toDestination();

                const loopA = new Tone.Loop((time) => {
                // triggered every eighth note.
                synth.triggerAttackRelease("G1", "2n");
                console.log(time);
                }, "8n").start(0);

                const loopB = new Tone.Loop((time) => {
                // triggered every eighth note.
                synth.triggerAttackRelease("C1", "2n");
                console.log(time);
                }, "8n").start("2n");


                Tone.Transport.start();
                Tone.Transport.bpm.rampTo(28);

                });
