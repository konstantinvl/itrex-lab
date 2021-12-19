import Calendar from 'react-calendar';
import styled from 'styled-components';

const StyledCalendar = styled(Calendar)`
    background: #ffffff;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 12px;
    margin-top: 40px;
    .react-calendar {
        &__navigation {
            border-radius: 12px 12px 0px 0px;
            display: flex;
            justify-content: space-between;
            height: 88px;
            background: #ffffff;
            padding: 0% 10%;
            border-bottom: 1px solid rgba(220, 224, 236, 0.5);
            &__label {
                font-weight: 600;
                font-size: 17px;
                line-height: 24px;

                display: flex;
                align-items: center;
                justify-content: center;
                background: #ffffff;
                border: none;

                &:disabled {
                    background: #ffffff;
                    opacity: 1;
                    color: #000000;
                }
            }
            &__arrow {
                background: #ffffff;
                border: none;
            }
        }
        &__viewContainer {
            min-height: 384px;
        }

        &__tile {
            height: 48px;
            width: 48px;
            margin-top: 8px;
            font-weight: 600;
            font-size: 17px;
            line-height: 24px;
            color: #202225;
            background: #ffffff;
            border: none;
            border-radius: 12px;
            &--now {
                border: 1px solid #7297ff;
                box-sizing: border-box;

                color: #7297ff;
            }
            &--active {
                background: #7297ff;
                color: #ffffff;
            }
            &:disabled {
                background: #dce0ec;
                color: #ffffff;
                border-radius: unset;
            }
        }
        &__month-view {
            margin: 16px 8% 32px 8%;
            &__weekdays__weekday {
                height: 48px;
                width: 48px;

                display: flex;
                align-items: center;
                justify-content: center;
                & abbr {
                    text-decoration: none;
                    color: #a1abc9;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 130%;
                }
            }
            &__days__day--neighboringMonth {
                color: #dce0ec;
            }
        }
    }
`;

export default StyledCalendar;
