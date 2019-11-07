import React from 'react';

const PersonList = ({ persons, filter, removePerson }) => {
    const shownPersons =
        filter === '' ? persons : persons.filter(person => {
            return person.name.indexOf(filter) !== -1;
        });

    return (
        <div>
            {shownPersons.map(person => (
                <p key={person.name}> {person.name} {person.number} </p>
            ))}
        </div>
    )
};

export default PersonList;