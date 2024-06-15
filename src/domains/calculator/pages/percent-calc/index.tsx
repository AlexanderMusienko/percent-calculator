import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  calculateDifferenceInPercentage,
  calculatePercentOfANumber,
  calculatePercentPlusNumber,
  subtractPercentFromNumber,
} from "../../utils";
import { copyToClipboard } from "../../../../shared/utils/clipboard";
import { toast } from "react-toastify";
import { Copy } from "../../../../assets/icons/Copy";
import { CardInstance } from "./ui/CardInstance";

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
  // numberOfNumberPercent: INumberOfNumberPercent;
  percentMinusNumber: IBaseFields;
  differenceInPercentage: IDifferenceInPercentage;
};

const decimalItems = Array.from({ length: 5 }, (_, index) => ({
  label: String(index),
  key: index,
}));

export const PercentCalc = () => {
  const { register, watch, getValues } = useForm<TFormData>();
  const [results, setResults] = useState({
    percentOfNumber: 0,
    percentPlusNumber: 0,
    percentMinusNumber: 0,
    percentNumberFromNumber: 0,
    percentOfDifference: 0,
  });

  const [numberOfDecimalPlaces, setNumberOfDecimalPlaces] = useState(0);

  const handleNumberOfDecimalPlaces = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    setNumberOfDecimalPlaces(+e.target.value);
  };

  const calculateAllFields = ({
    percentOfNumber,
    percentPlusNumber,
    percentMinusNumber,
    differenceInPercentage,
  }: TFormData) => {
    const percentOfANumberResult = calculatePercentOfANumber(
      percentOfNumber!,
      numberOfDecimalPlaces
    );
    setResults((prev) => ({
      ...prev,
      percentOfNumber: percentOfANumberResult,
    }));

    // Calculating sum percent to number
    const percentPlusNumberResult = calculatePercentPlusNumber(
      percentPlusNumber!,
      numberOfDecimalPlaces
    );
    setResults((prev) => ({
      ...prev,
      percentPlusNumber: percentPlusNumberResult,
    }));

    // Calculating subtract percent from number
    const subtractPercentFromNumberResult = subtractPercentFromNumber(
      percentMinusNumber!,
      numberOfDecimalPlaces
    );
    setResults((prev) => ({
      ...prev,
      percentMinusNumber: subtractPercentFromNumberResult,
    }));

    // Calculating difference
    const percentOfDifferenceResult = calculateDifferenceInPercentage(
      differenceInPercentage!,
      numberOfDecimalPlaces
    );
    setResults((prev) => ({
      ...prev,
      percentOfDifference: percentOfDifferenceResult,
    }));
  };

  useEffect(() => {
    calculateAllFields(getValues());
    const subscription = watch((values) => {
      calculateAllFields(values as TFormData);
    });
    return () => subscription.unsubscribe();
  }, [watch, numberOfDecimalPlaces]);

  return (
    <main className="relative container mx-auto max-w-7xl z-10 px-6 pb-12 flex-grow">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <CardInstance
          headerText="Вычесть процент от числа (-)"
          result={results.percentMinusNumber}
        >
          <Input
            type="number"
            placeholder="Процент"
            label="Процент %"
            {...register("percentMinusNumber.percent")}
          />
          <p>из</p>
          <Input
            type="number"
            placeholder="Число"
            label="Число"
            {...register("percentMinusNumber.fullNumber")}
          />
        </CardInstance>

        <CardInstance
          headerText="Процент от числа"
          result={results.percentOfNumber}
        >
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
        </CardInstance>

        <CardInstance
          headerText="Прибавить процент к числу (+)"
          result={results.percentPlusNumber}
        >
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
        </CardInstance>

        <CardInstance
          headerText="Разница в процентах между числами (Δ%)"
          result={results.percentOfDifference}
          unit="%"
        >
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
        </CardInstance>

        <Select
          onChange={handleNumberOfDecimalPlaces}
          label="Знаков после запятой"
        >
          {decimalItems.map((decimalItem) => (
            <SelectItem key={decimalItem.key} value={decimalItem.key}>
              {decimalItem.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </main>
  );
};
