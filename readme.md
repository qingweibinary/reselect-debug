## Reselect-debug

Reselect-debug is simple library that helps developer to identify what causes recomputation of [Reselect](https://github.com/reactjs/reselect)
It exposes 2 functions

| Methods | Description |
| ------  | ----------- |
| debugMemoize | A memoize function that will log some debug message |
| createDebugSelector | create a selector that will log debug message, have same interface as [createSelector](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) from reselect
