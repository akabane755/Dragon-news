import React, { Suspense } from 'react';
import AllCategories from './AllCategories';

const LeftAside = () => {
    return (
        <div>
           <Suspense fallback={<span class="loading loading-ring loading-xl"></span>}>
           <AllCategories></AllCategories>
           </Suspense>
        </div>
    );
};

export default LeftAside;