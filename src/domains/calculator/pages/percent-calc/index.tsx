import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateDifferenceInPercentage,
  calculatePercentOfANumber,
  calculatePercentPlusNumber,
  subtractPercentFromNumber,
} from "../../utils";

export interface IBaseFields {
  percent?: string;
  fullNumber?: string;
}

export interface INumberOfNumberPercent extends IBaseFields {
  partNumber?: string;
}

export interface IDifferenceInPercentage extends IBaseFields {
  secondFullNumber?: string;
}

type TFormData = {
  percentOfNumber: IBaseFields;
  percentPlusNumber: IBaseFields;
  numberOfNumberPercent: {
    percent: string;
    numberFromNumber: string;
    number: string;
  };
  percentMinusNumber: IBaseFields;
  differenceInPercentage: IDifferenceInPercentage;
};

export const PercentCalc = () => {
  const { register, watch } = useForm<TFormData>();
  const [results, setResults] = useState({
    percentOfNumber: 0,
    percentPlusNumber: 0,
    percentMinusNumber: 0,
    percentNumberFromNumber: 0,
    percentOfDifference: 0,
  });

  useEffect(() => {
    const subscription = watch(
      ({
        percentOfNumber,
        percentPlusNumber,
        percentMinusNumber,
        differenceInPercentage,
      }) => {
        // Calculating percent of a number
        const percentOfANumberResult = calculatePercentOfANumber(
          percentOfNumber!
        );
        setResults((prev) => ({
          ...prev,
          percentOfNumber: percentOfANumberResult,
        }));

        // Calculating sum percent to number
        const percentPlusNumberResult = calculatePercentPlusNumber(
          percentPlusNumber!
        );
        setResults((prev) => ({
          ...prev,
          percentPlusNumber: percentPlusNumberResult,
        }));

        // Calculating subtract percent from number
        const subtractPercentFromNumberResult = subtractPercentFromNumber(
          percentMinusNumber!
        );
        setResults((prev) => ({
          ...prev,
          percentMinusNumber: subtractPercentFromNumberResult,
        }));

        //Calculating difference
        const percentOfDifferenceResult = calculateDifferenceInPercentage(
          differenceInPercentage!
        );
        setResults((prev) => ({
          ...prev,
          percentOfDifference: percentOfDifferenceResult,
        }));
      }
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <main className="relative container mx-auto max-w-7xl z-10 px-6 mb-12 flex-grow">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex">
            <h1 className="text-xl font-bold">Процент от числа</h1>
          </CardHeader>
          <CardBody className="flex gap-4 flex-row items-center">
            <div className="flex gap-4 flex-column items-center">
              <Input
                type="number"
                placeholder="Процент"
                label="Процент %"
                {...register("percentOfNumber.percent")}
              />
              <p>от</p>
              <Input
                type="number"
                placeholder="Число"
                label="Число"
                {...register("percentOfNumber.fullNumber")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center flex-grow justify-between">
              <p>=</p>
              <p className="text-xl font-bold cursor-pointer">
                {results.percentOfNumber}
              </p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex">
            <h1 className="text-xl font-bold">Прибавить процент к числу (+)</h1>
          </CardHeader>
          <CardBody className="flex gap-4 flex-row items-center">
            <div className="flex gap-4 flex-column items-center">
              <Input
                type="number"
                placeholder="Процент"
                label="Процент %"
                {...register("percentPlusNumber.percent")}
              />
              <p>к</p>
              <Input
                type="number"
                placeholder="Число"
                label="Число"
                {...register("percentPlusNumber.fullNumber")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center flex-grow justify-between">
              <p>=</p>
              <p className="text-xl font-bold">{results.percentPlusNumber}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex">
            <h1 className="text-xl font-bold">Вычесть процент от числа (-)</h1>
          </CardHeader>
          <CardBody className="flex gap-4 flex-row items-center">
            <div className="flex gap-4 flex-column items-center">
              <Input
                type="number"
                placeholder="Процент"
                label="Процент %"
                {...register("percentMinusNumber.percent")}
              />
              <p>от</p>
              <Input
                type="number"
                placeholder="Число"
                label="Число"
                {...register("percentMinusNumber.fullNumber")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center flex-grow justify-between">
              <p>=</p>
              <p className="text-xl font-bold">{results.percentMinusNumber}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex">
            <h1 className="text-xl font-bold">
              Разница в процентах между числами (Δ%)
            </h1>
          </CardHeader>
          <CardBody className="flex gap-4 flex-row items-center">
            <div className="flex gap-4 flex-column items-center">
              <Input
                type="number"
                placeholder="Число"
                label="Число 1"
                {...register("differenceInPercentage.fullNumber")}
              />
              <p>от</p>
              <Input
                type="number"
                placeholder="Число"
                label="Число 2"
                {...register("differenceInPercentage.secondFullNumber")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center flex-grow justify-between">
              <p>=</p>
              <p className="text-xl font-bold">
                {results.percentOfDifference}%
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};
