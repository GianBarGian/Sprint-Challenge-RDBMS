const intToBoolean = int => {
    return int === 1 ? true : false;
}

const booleanToint = bool => {
    return bool === true ? 1 : 0;
}

const projectToBody = project => {
    const result = {
        ...project,
        completed: intToBoolean(project.completed),
    };

    if (project.actions) {
        result.actions = project.actions.map(action => ({
        ...action,
        completed: intToBoolean(action.completed),
        }));
    }

    return result;
}

const actionToBody = action => {
    return {
        ...action,
        completed: intToBoolean(action.completed),
    };
}

module.exports = {
    intToBoolean,
    booleanToint,
    projectToBody,
    actionToBody,
};