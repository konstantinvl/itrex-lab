/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Formik } from 'formik';
import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'services/store/hooks';
import { resolutionsSetRequested } from 'services/store/resolutions/resolutionActions';
import ClipboardIcon from './clipboardIcon';
import { NotificationType } from './enums';
import SmallButtonBlueIconLeft from './smallButtonBlueIconLeft';
import SmallButtonGreyIconLeft from './SmallButtonGreyIconLeft';

import {
    StylledPopUpWrapper,
    StylledPopupWindow,
    StyledPopUpWindowInputs,
    StyledPopUpWindowControls,
    StyledPopUpTitle,
    StyledPopUpUserName,
    StyledPopUpTextareaLabel,
    StyledPopUpTextArea,
    StyledTextAreaWrapper,
} from './styles/resolutionCreatePopup';
import UserIcon from './userIcon';
import XIcon from './XIcon';

function ResolutionCreatePopup(props: {
    firstName: string | undefined;
    lastName: string | undefined;
    appointmentID: string;
    closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
    const { firstName, lastName, closeFunc, appointmentID } = props;

    const { user, notification } = useAppSelector((state) => state);

    const [isSubmited, setIsSubmited] = useState<boolean>(false);

    useEffect(() => {
        if (isSubmited && notification.type === NotificationType.SUCCESS) {
            closeFunc(false);
        } else {
            setIsSubmited(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notification]);

    const dispatch = useAppDispatch();
    return (
        <StylledPopUpWrapper
            onClick={() => {
                closeFunc(false);
            }}
        >
            <Formik
                initialValues={{
                    resolution: 'afasfas',
                }}
                onSubmit={(values) => {
                    setIsSubmited(true);
                    dispatch(
                        resolutionsSetRequested(
                            { resolution: values.resolution, appointmentID },
                            user.role_name,
                        ),
                    );
                }}
            >
                {({ handleChange }) => (
                    <StylledPopupWindow
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <StyledPopUpWindowInputs>
                            <StyledPopUpTitle>Create a Resolution</StyledPopUpTitle>
                            <StyledPopUpUserName style={{ marginTop: '24px' }}>
                                <UserIcon />
                                {`${`${firstName} ${lastName}`}`}
                            </StyledPopUpUserName>
                            <StyledPopUpTextareaLabel>Resolution</StyledPopUpTextareaLabel>
                            <StyledTextAreaWrapper>
                                <Field
                                    name="resolution"
                                    component={StyledPopUpTextArea}
                                    id="resolution"
                                    onChange={handleChange}
                                />
                            </StyledTextAreaWrapper>
                        </StyledPopUpWindowInputs>
                        <StyledPopUpWindowControls>
                            <SmallButtonGreyIconLeft
                                IconFC={XIcon}
                                text="Cancel"
                                onClick={() => {
                                    closeFunc(false);
                                }}
                            />
                            <SmallButtonBlueIconLeft IconFC={ClipboardIcon} text="Create" />
                        </StyledPopUpWindowControls>
                    </StylledPopupWindow>
                )}
            </Formik>
        </StylledPopUpWrapper>
    );
}

export default ResolutionCreatePopup;
