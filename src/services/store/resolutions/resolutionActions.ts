import { PayloadAction } from '@reduxjs/toolkit';
import { ResolutionSetInterface, ResolutionsState } from '../../interfaces';

export const RESOLUTION_REQUEST_FULLFILED = 'resolution/requestFullfiled';
export const RESOLUTION_GET_REQUESTED = 'resolution/get_requested';
export const RESOLUTION_SET_REQUESTED = 'resolution/set_requested';
export const RESOLUTION_UPDATE_REQUESTED = 'resolution/update_requested';

export function resolutionsRequestFullfiled(
    resolutions: ResolutionsState,
): PayloadAction<ResolutionsState> {
    return { type: RESOLUTION_REQUEST_FULLFILED, payload: resolutions };
}

export function resolutionsGetRequested(role: string): PayloadAction<string> {
    return { type: RESOLUTION_GET_REQUESTED, payload: role.toLowerCase() };
}

export function resolutionsSetRequested(
    resolution: ResolutionSetInterface,
    role: string,
): PayloadAction<{ resolution: ResolutionSetInterface; role: string }> {
    return { type: RESOLUTION_SET_REQUESTED, payload: { resolution, role } };
}

export function resolutionsUpdateRequested(
    resolution: ResolutionSetInterface,
    role: string,
): PayloadAction<{ resolution: ResolutionSetInterface; role: string }> {
    return { type: RESOLUTION_UPDATE_REQUESTED, payload: { resolution, role } };
}
