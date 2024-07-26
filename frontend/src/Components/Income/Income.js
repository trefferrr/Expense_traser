import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

    useEffect(() => {
        getIncomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                {incomes.length > 0 && (
                    <h2 className="total-income">
                        Total Income: <span>${totalIncome()}</span>
                    </h2>
                )}
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => (
                            <IncomeItem
                                key={income._id}
                                id={income._id}
                                title={income.title}
                                description={income.description}
                                amount={income.amount}
                                date={income.date}
                                type={income.type}
                                category={income.category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        ))}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    );
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;
        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content {
        display: flex;
        gap: 2rem;
        .incomes {
            flex: 1;
        }
    }
`;

export default Income;
