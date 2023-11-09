import { useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';
import useDataToRecipes from './useDataToRecipes';
import useFetchRecipes from './useFetchRecipes';
import { setRecipes } from '../stores/recipes';

const useGetRecipes = () => {
    const fetchRecipes = useFetchRecipes();
    const dataToRecipes = useDataToRecipes();
    const dispatch = useDispatch();

    const getRecipes = useCallback(async (kitchen: string | undefined, diet: string | undefined) => {
        const data = await fetchRecipes(kitchen, diet);
        const recipesArr = dataToRecipes(data);
        dispatch(setRecipes(recipesArr));

        return recipesArr;
    }, [fetchRecipes, dataToRecipes, dispatch]);

    const memoizedGetRecipes = useMemo(() => getRecipes, [getRecipes]);

    return memoizedGetRecipes;
}

export default useGetRecipes;