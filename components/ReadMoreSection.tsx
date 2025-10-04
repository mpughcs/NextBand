import { useState } from 'react'
import { ReadMore } from './HomeStyles'

export default function ReadMoreSection() {
    const [showReadMore, setShowReadMore] = useState(false)

    const toggleReadMore = () => {
        setShowReadMore(!showReadMore)
    }

    return (
        <ReadMore>
            <div>
                <h2 className="toggle" onClick={toggleReadMore}>
                    {showReadMore ? 'Hide' : 'Read More'}
                </h2>
                {showReadMore && (
                    <div className="more">
                        <p className="quote">
                            <span>
                                "Southern California rock and roll only with a slightly harder-edged east coast approach.
                                Combining the embryonic stage of Parquet Courts with the Velvet Underground and Bowie"
                            </span> - <span className="attribution">Glide Magazine</span>
                        </p>
                        <p>
                            Sunday Mourners started humbly as The Good Job Botanical Band in the university dorm rooms
                            of lead guitarist Max Pugh and lead localist Quinn Robinson. It was not until after they
                            were joined by drummer Z Evan Long and bassist Casey Hoerman that the band bloomed into
                            the Sunday Mourners. A protopunk-inspired noisy onslaught of raw rock and roll energy
                            mixed with the intricacies of 60's/70s freak-folk and country music. Characterized by
                            their energetic live performances, DIY production, and eclectic music taste, Sunday
                            Mourners excite listeners with glimpses into a past that never was.
                        </p>
                    </div>
                )}
            </div>
        </ReadMore>
    )
}
