import React from 'react';
import StyledImgLink from './styles/authImageLink';
import StyledTitleAuth from './styles/authTitle';

function AuthentificationTitle(props: {
    title: string;
    img: string | undefined;
    link: string | null;
}): JSX.Element {
    const { title, img, link } = props;
    return (
        <StyledTitleAuth htmlFor="authForm">
            {img && link ? (
                <StyledImgLink
                    to={link}
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/icons/${img})`,
                    }}
                />
            ) : (
                ''
            )}
            {title}
        </StyledTitleAuth>
    );
}

export default AuthentificationTitle;
