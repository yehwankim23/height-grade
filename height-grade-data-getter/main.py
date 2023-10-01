import json
import statistics

STATS = {
    "남자": [
        [174.5, 5.63],
        [174.8, 5.59],
        [175, 5.5],
        [174.6, 5.62],
        [173.8, 5.41],
        [172.6, 4.91],
        [171.4, 5.32],
        [169.7, 5.42],
        [168.4, 5.5],
    ],
    "여자": [
        [162.3, 5.13],
        [162.1, 5.26],
        [161.9, 5.46],
        [161.9, 5.32],
        [161, 5.09],
        [159.8, 5.25],
        [158, 4.98],
        [156.7, 5.1],
        [155.7, 4.96],
    ]
}


def main():
    data = dict()

    for sex, values in STATS.items():
        data[sex] = list()

        for mu, sigma in values:
            heights = list()
            distribution = statistics.NormalDist(mu, sigma)

            for percentile in range(99, 0, -1):
                heights.append(distribution.inv_cdf(percentile / 100))

            data[sex].append(heights)

    data_js = open("../scripts/data.js", "w", encoding="utf_8")
    data_js.write("const data = " + json.dumps(data, ensure_ascii=False, indent=2) + "\n")
    data_js.close()


if __name__ == "__main__":
    main()
