/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Field, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'services/store/hooks';
import { resolutionsUpdateRequested } from 'services/store/resolutions/resolutionActions';
import { selectResolutionByID } from 'services/store/resolutions/resolutionReduser';
import CheckIcon from './checkIcon';
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

function ResolutionEditPopup(props: {
    firstName: string | undefined;
    lastName: string | undefined;
    appointmentID: string;
    closeFunc: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
    const { firstName, lastName, closeFunc, appointmentID } = props;

    const { user, notification } = useAppSelector((state) => state);

    const state = useAppSelector((state_) => state_);

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
                    console.log(values);
                    setIsSubmited(true);
                    const id: string = selectResolutionByID(state, appointmentID)?.id as string;
                    dispatch(
                        resolutionsUpdateRequested(
                            {
                                resolution: values.resolution,
                                appointmentID: id,
                            },
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
                            <StyledPopUpTitle>Edit a Resolution</StyledPopUpTitle>
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
                            <SmallButtonBlueIconLeft IconFC={CheckIcon} text="Save" />
                        </StyledPopUpWindowControls>
                    </StylledPopupWindow>
                )}
            </Formik>
        </StylledPopUpWrapper>
    );
}

export default ResolutionEditPopup;
