var a = [10,30,40,20];

var max = getMax(a);
var min = getMin(a);
var range = getRange(a);
var mean = getMean(a);

console.log(a);
console.log("Max of array = "+max);
console.log("Min of array = "+min);
console.log("Range of array = "+range);
console.log("Mean of array = "+mean);

function getMax(ar)
{
	var ar_len = ar.length;
	var max_num;
	if(ar_len > 0)
	{
		max_num = a[0];
		for(var i=1; i < ar_len; i++)
		{
			if(ar[i] > max_num)
			{
				max_num = ar[i];
			}
		}
	}

	return max_num;
}

function getMin(ar)
{
	var ar_len = ar.length;
	var min_num;
	if(ar_len > 0)
	{
		min_num = a[0];
		for(var i=1; i < ar_len; i++)
		{
			if(ar[i] < min_num)
			{
				min_num = ar[i];
			}
		}
	}

	return min_num;
}

function getRange(ar)
{
	var max = getMax(ar);
	var min = getMin(ar);
	var range;
	if(max != undefined && min != undefined)
	{
		range = max - min;
	}

	return range;
}

function getMean(ar)
{
	var mean;
	var sum=0;
	var ar_len = ar.length;
	if(ar_len > 0)
	{
		for(var i of ar)
		{
			sum = sum + i;
		}
		mean = sum/ar_len;
	}

	return mean;
}
