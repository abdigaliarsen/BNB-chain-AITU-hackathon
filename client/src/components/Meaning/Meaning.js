import React from "react";

import "./Meaning.sass";

const Meaning = () => {
    return (
        <div className="meaning">
            <div className="meaning__container">
                <div className="meaning__header">Meaning of the project</div>

                <div className="meaning__text">
                    In Buddhism, the concept of the mindstream refers to the
                    continuous flow of thoughts, emotions, and experiences that
                    make up an individual's consciousness.
                </div>

                <img src="svgs/illustration_1.svg" alt="illustration_1" />

                <div className="meaning__text">
                    It is believed to be something that is intangible and
                    incorporeal, and it is seen as being the repository of an
                    individual's actions and experiences.
                </div>
                <img src="svgs/illustration_2.svg" alt="illustration_2" />
                <div className="meaning__text">
                    In some schools of Buddhism, the mindstream is seen as being
                    closely connected to the concept of Karma, which is the idea
                    that our actions have consequences, and that the things that
                    happen to us in our lives are a result of the things we have
                    done in the past.
                </div>
                <img src="svgs/illustration_3.svg" alt="illustration_3" />
                <div className="meaning__text">
                    The mindstream is believed to carry with it the effects of
                    our past actions, and to shape the experiences we have in
                    the future.
                </div>
                <img src="svgs/illustration_4.svg" alt="illustration_4" />
            </div>
        </div>
    );
};

export default Meaning;
