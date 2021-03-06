import {
    createSlice,
    createSelector,
    createAsyncThunk,
    PayloadAction
} from '@reduxjs/toolkit';

import { batch } from 'react-redux'

import {
    RootState,
    StoreDispatch,
    // StoreGetState
} from '../configureStore';

import {
    QueryLocation4Covid19TrendData,
    QueryLocationFeature,
} from 'covid19-trend-map';

import {
    fetchCovid19Data,
    fetchCovid19DataForNYCCounties,
    FIPSCodes4NYCCounties,
    FetchCovid19DataResponse,
} from '../../utils/queryCovid19Data';

import {
    updateQueryInURLHashParams
} from '../../utils/UrlSearchParams'

type State = {
    loading: boolean;
    data: FetchCovid19DataResponse;
    queryLocation: QueryLocation4Covid19TrendData;
};

type FetchCovid19TimeSeriesDataParam = {
    countyFIPS?: string;
    stateName?: string;
    isNYCCounties?: boolean;
};

const SliceName = 'covid19TimeSeriesData'

const fetchData = createAsyncThunk(
    `${SliceName}/fetchData`,
    async ({
        countyFIPS,
        stateName,
        isNYCCounties,
    }: FetchCovid19TimeSeriesDataParam) => {
        if (stateName) {
            const data4SelectedState = await fetchCovid19Data({
                stateName,
            });
            return data4SelectedState;
        }

        if (isNYCCounties) {
            const data4NYCCounty = await fetchCovid19DataForNYCCounties();
            return data4NYCCounty;
        }

        const data4SelectedCounty = await fetchCovid19Data({
            countyFIPS,
        });
        return data4SelectedCounty;
    }
);

const slice = createSlice({
    name: SliceName,
    initialState: {
        loading: false,
        data: null,
        queryLocation: null,
    } as State,
    reducers: {
        queryResultsReset: (state) => {
            state.data = null;
            state.queryLocation = null;
            state.loading = null;
        },
        queryLocationUpdated: (state, action: PayloadAction<QueryLocation4Covid19TrendData>) => {
            state.queryLocation = action.payload;
        },
    },
    extraReducers: {
        [fetchData.pending.type]: (state) => {
            state.loading = true;
            state.data = null;
        },
        [fetchData.fulfilled.type]: (
            state,
            action: PayloadAction<FetchCovid19DataResponse>
        ) => {
            state.loading = false;
            state.data = action.payload;
        },
    },
});

const { reducer } = slice;

const { queryResultsReset, queryLocationUpdated } = slice.actions;

export const queryCountyData = ({
    FIPS, name, feature
}:{
    FIPS: string;
    name: string;
    feature?: QueryLocationFeature,
}) => (
    dispatch: StoreDispatch
    // getState: StoreGetState
): void => {

    if ( FIPS && name ) {

        const isNYCCounties = FIPSCodes4NYCCounties.indexOf(FIPS) > -1;

        const queryLocation:QueryLocation4Covid19TrendData = {
            graphic: feature,
            locationName: name,
            FIPS
        };

        // should only result in one combined re-render, not two
        batch(()=>{

            dispatch(queryLocationUpdated(queryLocation));

            dispatch(
                fetchData({
                    countyFIPS: FIPS,
                    isNYCCounties,
                })
            );
        })

        updateQueryInURLHashParams(FIPS);

    } else {
        dispatch(resetQueryData());
    }
};

export const queryStateData = ({
    name, feature, FIPS
}:{
    name: string;
    feature?: QueryLocationFeature,
    FIPS: string
}) => (
    dispatch: StoreDispatch
    // getState: StoreGetState
): void => {
    if (name) {
        // const stateName = feature.attributes['STATE_NAME'];

        const queryLocation = {
            graphic: feature,
            locationName: name,
            FIPS
        };
        
        // should only result in one combined re-render, not two
        batch(()=>{
            dispatch(queryLocationUpdated(queryLocation));

            dispatch(
                fetchData({
                    stateName: name,
                })
            );
        })

        updateQueryInURLHashParams(FIPS);

    } else {
        dispatch(resetQueryData());
    }
};

export const resetQueryData = () => (
    dispatch: StoreDispatch
    // getState: StoreGetState
): void => {
    dispatch(queryResultsReset());

    updateQueryInURLHashParams();
};

export const covid19DataByLocationSelector = createSelector(
    (state: RootState) => state.covid19Data.data,
    (data) => data
);

export const queryLocationSelector = createSelector(
    (state: RootState) => state.covid19Data.queryLocation,
    (queryLocation) => queryLocation
);

export const covid19DataOnLoadingSelector = createSelector(
    (state: RootState) => state.covid19Data.loading,
    (loading) => loading
);

export default reducer;
