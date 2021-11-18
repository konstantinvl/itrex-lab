// import React, { FC } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { rgba } from 'polished';

const StyledSelect = styled(Select)`
    margin-top: 16px;

    .select {
        &__control {
            background: ${(props) => (props.isDisabled ? '#dce0ec' : '#ffffff')};
            border: 1px solid #dce0ec;
            box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
            border-radius: 8px;
            padding-left: 24px;
            height: 56px;
            &--is-focused {
                border: 1px solid #7297ff;
                box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
                &__dropdown-indicator {
                    color: #7297ff;
                }
                & .css-tj5bde-Svg {
                    color: #7297ff;
                }
            }
            &--menu-is-open {
                & .select__indicators {
                    transform: rotate(-180deg);
                }
            }
        }
        & .css-tj5bde-Svg {
            color: #a1abc9;
        }

        &__indicators {
            transition: all 0.3s;
        }
        &__indicator-separator {
            visibility: hidden;
        }
        &__value-container {
            padding: 0;
        }

        &__menu {
            margin-top: 4px;
            max-height: 128px;
            padding: 4px 4px;
            &-list {
                padding: 0;
                padding-right: 8px;
                max-height: 120px;
                &::-webkit-scrollbar {
                    margin-top: 24px;
                    width: 8px;
                    background: ${rgba('#dce0ec', 0.32)};
                    border-radius: 8px;
                }

                &::-webkit-scrollbar-thumb {
                    background: ${rgba('#dce0ec', 0.56)};
                    border-radius: 8px;
                }
            }
        }
        &__option {
            height: 40px;
            font-weight: 400;
            font-size: 15px;
            line-height: 130%;
            border-radius: 6px;
            display: flex;
            align-items: center;

            &::active {
                background: #7297ff;
            }
            color: #202225;
            &--is-focused,
            &--is-clicked {
                background: #f9faff;
            }
            &--is-selected {
                background: #7297ff;
            }
        }
    }
`;

export default StyledSelect;
