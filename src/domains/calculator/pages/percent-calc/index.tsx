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

const copyOnClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
  const text = e.currentTarget.innerText;
  toast("Успешно скопировано", { icon: Copy });
  copyToClipboard(text);
};

const decimalItems = Array.from({ length: 5 }, (_, index) => ({
  label: index,
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

    //Calculating difference
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
    <main className="relative container mx-auto max-w-7xl z-10 px-6 mb-12 flex-grow">
      <div className="grid grid-cols-2 gap-4">
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
              <p>из</p>
              <Input
                type="number"
                placeholder="Число"
                label="Число"
                {...register("percentMinusNumber.fullNumber")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center flex-grow justify-between">
              <p>=</p>
              <p
                onClick={copyOnClick}
                className="text-xl font-bold cursor-pointer"
              >
                {results.percentMinusNumber}
              </p>
            </div>
          </CardBody>
        </Card>

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
              <p
                onClick={copyOnClick}
                className="text-xl font-bold cursor-pointer"
              >
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
              <p
                onClick={copyOnClick}
                className="text-xl font-bold cursor-pointer"
              >
                {results.percentPlusNumber}
              </p>
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
              <p
                onClick={copyOnClick}
                className="text-xl font-bold cursor-pointer"
              >
                {results.percentOfDifference}%
              </p>
            </div>
          </CardBody>
        </Card>

        <Select
          onChange={handleNumberOfDecimalPlaces}
          label="Знаков после запятой"
        >
          <SelectItem key={0} value={0}>
            0
          </SelectItem>
          <SelectItem key={1} value={1}>
            1
          </SelectItem>
          <SelectItem key={2} value={2}>
            2
          </SelectItem>
          <SelectItem key={3} value={3}>
            3
          </SelectItem>
          <SelectItem key={4} value={4}>
            4
          </SelectItem>
          <SelectItem key={5} value={5}>
            5
          </SelectItem>
          {/* {decimalItems.map((decimalItem) => (
            <SelectItem key={decimalItem.key} value={decimalItem.key}>
              {decimalItem.label}
            </SelectItem>
          ))} */}
        </Select>
      </div>
    </main>
  );
};
